const AlertDisplay = ({ alerts }) => {
    return (
        <div className="alert">
            <h2>Weather Alerts</h2>
            {alerts.length > 0 ? (
                alerts.map((alert, index) => <p key={index}>{alert.message}</p>)
            ) : (
                <p>No alerts</p>
            )}
        </div>
    );
};

export default AlertDisplay;
