import './../styles.css';
import { useEffect } from 'react';

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
    useEffect(() => {
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

        window.onmousedown = (e: MouseEvent) => {
            dragging = true;
            lastX = e.clientX;
            smoothedVelocity = 0;

            // Stop any ongoing scroll momentum so drag takes over cleanly
            velocity = 0;
            animating = false;
        };

        window.onmouseup = () => {
            if (!dragging) return;
            dragging = false;

            velocity = Math.max(-MAX_FLING_VELOCITY, Math.min(smoothedVelocity, MAX_FLING_VELOCITY));
            startMomentum(track);
        };

        window.onmousemove = (e: MouseEvent) => {
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
            window.onmousedown = null;
            window.onmouseup = null;
            window.onmousemove = null;
            velocity = 0;
            animating = false;
        };
    }, []);

    return (
        <div className="gallery-wrapper">
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <img className="image" src="https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1772475385350-d130ebe22bf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1771150473820-37128024ac31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1773060897328-9091387ec521?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" draggable="false" />
                <img className="image" src="https://plus.unsplash.com/premium_photo-1741805870438-457e1b6eaa39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D" draggable="false" />
                <img className="image" src="https://plus.unsplash.com/premium_photo-1675714692786-22ad175c9a76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1773904215693-934764345e52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" draggable="false" />
            </div>
        </div>
    );
}

export default Image_gallery;
