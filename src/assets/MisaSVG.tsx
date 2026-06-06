export const MisaSVG = ({ className }: { className?: string }) => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 60"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: 'block', margin: 0, padding: 0 }}
            >
                <rect width="100%" height="100%" fill="#f0f0f0" rx="6" />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="28"
                    fontWeight="bold"
                    fill="#333"
                    textLength="140"                // ← естественная ширина ~110, делаем 140
                    lengthAdjust="spacing"          // ← увеличивает пробелы между буквами
                >
                    Misa
                </text>
            </svg>
        </div>
    );
};