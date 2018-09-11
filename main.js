/*
Requirements
    반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
    숫자가 아니면 에러를 반환하도록 구현한다.
    인자의갯수가 부족하면 에러를 반환한다.
*/
const computeArea = {
    circle : function(radius) {
        return Math.PI * Math.pow(radius, 2);
    },
    square : function(width, height) {
        return width * height;
    },
    trapezoid : function(top, bottom, height) {
        return 1/2 * (top + bottom) * height;
    },
    cylinder : function(radius, height) {
        const circleSize = Math.PI * Math.pow(radius, 2);
        const circumference = 2 * Math.PI * radius
        return (circumference * height) + (2 * circleSize);
    }
};


const checkErrors = {
    hasLessArgs : function(arr) {
        if (arr.some((num) => num <= 0)) {
            alert('입력하지 않은 정보가 있거나, 0보다 작거나 같은 값이 있습니다!');
            return true;
        }
        return false;
    },
    hasAnyNaN : function(arr) {
        if (arr.some((num) => Number.isNaN(num))) {
            alert('숫자가 아닌 입력값이 있습니다!');
            return true;
        }
        return false;
    }
};
