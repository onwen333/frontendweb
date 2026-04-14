import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ValueCard = ({
    icon,
    title,
    description,
    color = "text-[#c0c1ff]",
    bgColor = "bg-[#c0c1ff]/10",
    borderColor = "border-white/5",
    imageUrl = null,
}) => {
    return (
        <div
            className={`rounded-2xl p-6 bg-[#111c33] border ${borderColor} hover:border-white/10 transition-all duration-300 group hover:-translate-y-0.5 flex flex-col`}
        >
            {/* Icon */}
            <div
                className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mb-4`}
            >
                <FontAwesomeIcon icon={icon} className={`${color} text-sm`} />
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white mb-2">{title}</h3>

            {/* Description */}
            <p className="text-[#6b7190] text-sm leading-relaxed mb-4 flex-1">
                {description}
            </p>

            {/* Optional image */}
            {imageUrl && (
                <div className="rounded-xl overflow-hidden border border-white/5 mt-auto">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[120px] object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default ValueCard;