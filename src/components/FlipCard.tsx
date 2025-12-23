import { useState } from "react";
import "../pages/styles/Contacts.css"; // Adjust path as needed based on where styles are

interface FlipCardProps {
    title: string;
    frontImage?: string;
    backContent: React.ReactNode;
    isWide?: boolean;
    targetUrl?: string;
    className?: string;
    description?: string;
}

const FlipCard = ({ title, frontImage, backContent, isWide = false, targetUrl, className = "", description }: FlipCardProps) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`contact-card ${isWide ? "contact-card-wide" : ""} ${flipped ? "is-flipped" : ""} ${className}`}>
            <div className="contact-card-inner">
                <div className="contact-card-front">
                    <div className="card-content">
                        {frontImage && (
                            targetUrl ? (
                                <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="card-image-link">
                                    <img src={frontImage} alt={title} className="card-front-image" />
                                </a>
                            ) : (
                                <img src={frontImage} alt={title} className="card-front-image" />
                            )
                        )}
                        <h3>{title}</h3>
                        {description && <p className="card-description-front" dangerouslySetInnerHTML={{ __html: description }}></p>}
                    </div>
                    <button className="card-flip-btn" onClick={() => setFlipped(true)} aria-label="Flip Card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </button>
                </div>
                <div className="contact-card-back">
                    {backContent}
                    <button className="card-flip-btn" onClick={() => setFlipped(false)} aria-label="Back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ transform: "scaleX(-1)" }}>
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
