import './../styles.css';
import { useEffect, useState } from 'react';
import { horizontalGallery } from '../components/DataTypes';
// --- Momentum state (scroll wheel only) ---
let velocity = 0;
let percentage = 0;
let animating = false;

const FRICTION = 0.95;
const MIN_VELOCITY = 0.01;
const SCROLL_SENSITIVITY = 0.25;
const MAX_FLING_VELOCITY = 1.5;

function applyPositionDirect(track: HTMLElement) {
    track.style.transform = `translate(${percentage}%, -50%)`;
    for (const image of track.querySelectorAll<HTMLImageElement>(".image")) {
        image.style.objectPosition = `${percentage + 100}% 50%`;
    }
}

function tick(track: HTMLElement) {
    velocity *= FRICTION;
    percentage = Math.max(Math.min(percentage + velocity, 0), -100);

    applyPositionDirect(track);

    if (Math.abs(velocity) > MIN_VELOCITY && percentage > -100 && percentage < 0) {
        requestAnimationFrame(() => tick(track));
    } else {
        animating = false;
    }
}

function startMomentum(track: HTMLElement) {
    if (animating) return;
    animating = true;
    requestAnimationFrame(() => tick(track));
}

function handleScroll(e: WheelEvent) {
    e.preventDefault();
    const track = document.getElementById("image-track");
    if (!track) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    velocity -= delta * SCROLL_SENSITIVITY * 0.01;
    velocity = Math.max(-MAX_FLING_VELOCITY, Math.min(velocity, MAX_FLING_VELOCITY));

    startMomentum(track);
}

function Image_gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Gallery";
        document.body.className = "gallery-layout";

        const track = document.getElementById("image-track");
        if (!track) return;

        velocity = 0;
        percentage = 0;
        animating = false;

        window.addEventListener("wheel", handleScroll, { passive: false });

        let dragging = false;
        let lastX = 0;
        let smoothedVelocity = 0;

        window.onpointerdown = (e: MouseEvent) => {
            dragging = true;
            lastX = e.clientX;
            smoothedVelocity = 0;

            // Stop any ongoing scroll momentum so drag takes over cleanly
            velocity = 0;
            animating = false;
        };

        window.onpointerup = () => {
            if (!dragging) return;
            dragging = false;

            velocity = Math.max(-MAX_FLING_VELOCITY, Math.min(smoothedVelocity, MAX_FLING_VELOCITY));
            startMomentum(track);
        };

        window.onpointermove = (e: MouseEvent) => {
            if (!dragging) return;

            const dx = e.clientX - lastX;
            lastX = e.clientX;

            const trackWidth = track.scrollWidth;
            const delta = (dx / trackWidth) * 100 * 1.5;

            percentage = Math.max(Math.min(percentage + delta, 0), -100);

            applyPositionDirect(track);

            smoothedVelocity = smoothedVelocity * 0.7 + delta * 0.3;
        };

        return () => {
            document.body.className = "";
            window.removeEventListener("wheel", handleScroll);
            window.onpointerdown = null;
            window.onpointerup = null;
            window.onpointermove = null;
            velocity = 0;
            animating = false;
        };
    }, []);

    return (
        <>
            {selected && (
                <div className="overlay" onClick={() => setSelected(null)}>
                    <img src={selected} className="overlay-img" />
                </div>
            )}
            <div className="gallery-wrapper">
                <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                    {horizontalGallery.map((src, i) => (
                        <img className="image" onClick={() => setSelected(src)} src={src} key={i} draggable="false" />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Image_gallery;
