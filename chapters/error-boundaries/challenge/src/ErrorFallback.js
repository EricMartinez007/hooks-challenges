export default function ErrorFallback ({reset}) {
    return (
        <div className="error-container">
        <h2>Error!</h2>
        <button onClick={reset}>Retry</button>
        </div>
    );
}