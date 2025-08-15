const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(20).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;