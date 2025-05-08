interface ISpinner {
    [key: string]: string;
}

export default function Spiner({
    width = '50px',
    height = '50px',
    display = 'block',
    margin = '10px 150px',
}: ISpinner) {
    return (
        <svg
            style={{ display, height, width, margin }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
        >
            <linearGradient id="a8">
                <stop offset="0" stopColor="#278FB4" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#278FB4"></stop>
            </linearGradient>
            <circle
                fill="none"
                stroke="url(#a8)"
                strokeWidth="27"
                strokeLinecap="round"
                strokeDasharray="0 44 0 44 0 44 0 44 0 360"
                cx="100"
                cy="100"
                r="70"
                transform-origin="center"
            >
                <animateTransform
                    type="rotate"
                    attributeName="transform"
                    calcMode="discrete"
                    dur="0.8"
                    values="360;324;288;252;216;180;144;108;72;36"
                    repeatCount="indefinite"
                ></animateTransform>
            </circle>
        </svg>
    );
}
