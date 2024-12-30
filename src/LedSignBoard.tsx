import React, { useState } from 'react';
import './LedSignBoard.css';

interface LedSignBoardProps {
    initialBusNumber?: string;
    initialTopText?: string;
    initialBottomText?: string;
}

const LedSignBoard: React.FC<LedSignBoardProps> = ({
    initialBusNumber = "297",
    initialTopText = "Next Stop: Central Station",
    initialBottomText = "Please Stand Clear of Doors"
}) => {
    const [busNumber, setBusNumber] = useState(initialBusNumber);
    const [topText, setTopText] = useState(initialTopText);
    const [bottomText, setBottomText] = useState(initialBottomText);
    const [topScrollSpeed, setTopScrollSpeed] = useState(5);
    const [bottomScrollSpeed, setBottomScrollSpeed] = useState(8);
    const [topScrollEnabled, setTopScrollEnabled] = useState(false);
    const [bottomScrollEnabled, setBottomScrollEnabled] = useState(true);

    // Convert speed value (1-10) to seconds (faster = fewer seconds)
    const convertSpeedToSeconds = (speed: number) => (11 - speed) * 2;

    return (
        <div className="sign-board-container">
            <div className="led-sign-board">
                <div className="left-half">
                    <div className="led-display">{busNumber}</div>
                </div>
                <div className="right-half">
                    <div className="top-section">
                        <div className={`marquee ${!topScrollEnabled ? 'paused' : ''}`} 
                             style={{ '--scroll-speed': `${convertSpeedToSeconds(topScrollSpeed)}s` } as React.CSSProperties}>
                            <span>{topText}</span>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <div className={`marquee ${!bottomScrollEnabled ? 'paused' : ''}`}
                             style={{ '--scroll-speed': `${convertSpeedToSeconds(bottomScrollSpeed)}s` } as React.CSSProperties}>
                            <span>{bottomText}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="controls">
                <div className="controls-row">
                    <div className="bus-number-section">
                        <h3>Bus Number</h3>
                        <div className="control-group">
                            <input
                                type="text"
                                value={busNumber}
                                onChange={(e) => setBusNumber(e.target.value)}
                                maxLength={4}
                            />
                        </div>
                    </div>
                    
                    <div className="message-controls">
                        <div className="control-section">
                            <h3>Top Message</h3>
                            <div className="control-group">
                                <label>Text:</label>
                                <input
                                    type="text"
                                    value={topText}
                                    onChange={(e) => setTopText(e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <label>Speed:</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={topScrollSpeed}
                                    onChange={(e) => setTopScrollSpeed(Number(e.target.value))}
                                    disabled={!topScrollEnabled}
                                />
                                <span>{topScrollSpeed}</span>
                            </div>
                            <div className="control-group">
                                <label>Scroll:</label>
                                <input
                                    type="checkbox"
                                    checked={topScrollEnabled}
                                    onChange={(e) => setTopScrollEnabled(e.target.checked)}
                                />
                            </div>
                        </div>
                        
                        <div className="control-section">
                            <h3>Bottom Message</h3>
                            <div className="control-group">
                                <label>Text:</label>
                                <input
                                    type="text"
                                    value={bottomText}
                                    onChange={(e) => setBottomText(e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <label>Speed:</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={bottomScrollSpeed}
                                    onChange={(e) => setBottomScrollSpeed(Number(e.target.value))}
                                    disabled={!bottomScrollEnabled}
                                />
                                <span>{bottomScrollSpeed}</span>
                            </div>
                            <div className="control-group">
                                <label>Scroll:</label>
                                <input
                                    type="checkbox"
                                    checked={bottomScrollEnabled}
                                    onChange={(e) => setBottomScrollEnabled(e.target.checked)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LedSignBoard;
