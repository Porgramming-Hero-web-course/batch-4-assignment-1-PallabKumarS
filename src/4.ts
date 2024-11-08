{
  type circle = {
    shape: "circle";
    radius: number;
  };

  type rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type shape = circle | rectangle;

  const calculateShapeArea = (object: shape): number => {
    let area: number = 0;
    if (object.shape === "circle") {
      area = Math.PI * object.radius * object.radius;
    } else {
      area = object.height * object.width;
    }
    return parseFloat(area.toPrecision(4));
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea, rectangleArea);
}
