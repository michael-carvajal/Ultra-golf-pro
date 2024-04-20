import {Svg, Path} from "react-native-svg";
import React from "react";

interface GoogleLogoProps {
    style: object;
}

export default function GoogleLogo({style}: GoogleLogoProps) {
    return (
        <Svg fill="none" viewBox="0 0 24 24" style={style}>
            <Path
                fill="#4285F4"
                fillRule="evenodd"
                d="M23.496 12.604c0-.816-.073-1.6-.209-2.352h-10.83V14.7h6.188a5.29 5.29 0 0 1-2.294 3.47v2.886h3.716c2.175-2.002 3.43-4.95 3.43-8.452Z"
                clipRule="evenodd"
            />
            <Path
                fill="#34A853"
                fillRule="evenodd"
                d="M12.456 23.842c3.105 0 5.709-1.03 7.611-2.786l-3.716-2.885c-1.03.69-2.347 1.097-3.895 1.097-2.995 0-5.53-2.023-6.434-4.74H2.18v2.979a11.496 11.496 0 0 0 10.276 6.335Z"
                clipRule="evenodd"
            />
            <Path
                fill="#FBBC05"
                fillRule="evenodd"
                d="M6.022 14.527a6.913 6.913 0 0 1-.361-2.185c0-.758.13-1.495.36-2.185v-2.98H2.18a11.495 11.495 0 0 0-1.224 5.165c0 1.856.445 3.612 1.224 5.165l3.842-2.98Z"
                clipRule="evenodd"
            />
            <Path
                fill="#EA4335"
                fillRule="evenodd"
                d="M12.456 5.416c1.689 0 3.205.58 4.396 1.72l3.299-3.298C18.159 1.982 15.556.842 12.456.842A11.496 11.496 0 0 0 2.18 7.178l3.842 2.98c.904-2.719 3.44-4.742 6.434-4.742Z"
                clipRule="evenodd"
            />
        </Svg>
    );
};
