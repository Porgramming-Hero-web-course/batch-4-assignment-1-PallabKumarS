"use strict";
{
    const calculateShapeArea = (object) => {
        let area = 0;
        if (object.shape === "circle") {
            area = Math.PI * object.radius * object.radius;
        }
        else {
            area = object.height * object.width;
        }
        return parseFloat(area.toFixed(2));
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea, rectangleArea);
}
