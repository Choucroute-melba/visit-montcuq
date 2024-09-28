export function getPointOnCircle(radius: number, angleDegrees: number) {
    const angleRadians = angleDegrees * (Math.PI / 180);

    const x: number = radius * Math.cos(angleRadians);
    const y = radius * Math.sin(angleRadians);

    return { x: Math.round(x), y: Math.round(y) };
}