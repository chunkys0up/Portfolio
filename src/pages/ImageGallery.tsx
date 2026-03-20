import './../styles.css';
import { useEffect } from 'react';

function updateTrack(track: HTMLElement, percentage: number) {
    track.animate(
        { transform: `translate(${percentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
    );

    for (const image of track.querySelectorAll<HTMLImageElement>(".image")) {
        image.animate(
            { objectPosition: `${percentage + 100}% 50%` },
            { duration: 1200, fill: "forwards" }
        );
    }
}

function handleScroll(e: WheelEvent) {
    const track = document.getElementById("image-track");
    if (!track) return;

    const scrollAmt = e.deltaY;
    const prevPercentage = parseFloat(track.dataset.prevPercentage ?? "0");
    const percentage = Math.max(Math.min((prevPercentage + scrollAmt) * -100, 0), -100);

    updateTrack(track, percentage);
}

function Image_gallery() {
    useEffect(() => {
        document.body.className = "gallery-layout";

        const track = document.getElementById("image-track");
        if (!track) return;

        // SCROLL WHEEL MOVEMENT
        track?.addEventListener("wheel", handleScroll);

        window.onmousedown = (e: MouseEvent) => {
            track.dataset.mouseDownAt = e.clientX.toString();
        };

        window.onmouseup = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage ?? "0";
        };

        window.onmousemove = (e: MouseEvent) => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - e.clientX;
            const maxDelta = window.innerWidth / 2;
            const prevPercentage = parseFloat(track.dataset.prevPercentage ?? "0");
            const percentage = Math.max(Math.min(prevPercentage + (mouseDelta / maxDelta) * -100, 0), -100);

            track.dataset.percentage = percentage.toString();

            updateTrack(track as HTMLDivElement, percentage);
        };


        return () => {
            document.body.className = "";
            window.onmousedown = null;
            window.onmouseup = null;
            window.onmousemove = null;
        };
    }, []);

    return (
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            <img className="image" src="https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D" draggable="false" />
            <img className="image" src="https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1771150473820-37128024ac31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1773167558749-ab4443c75f37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" draggable="false" />
            <img className="image" src="https://plus.unsplash.com/premium_photo-1741805870438-457e1b6eaa39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D" draggable="false" />
        </div>
    );
}

export default Image_gallery;
