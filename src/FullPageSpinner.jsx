import 'bootstrap/dist/css/bootstrap.min.css';

export default function FullPageSpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
