import "/node_modules/flag-icons/css/flag-icons.min.css";

const NationalizeDisplayCountry = ({ country_id, probability }) => {

    const countryFlag = `fi fi-${country_id}`.toLocaleLowerCase();
    const proba = (probability * 100).toLocaleString(undefined, { maximumSignificantDigits: 2 });
    
    return (
        <>
            <span className={countryFlag}></span>
            <span>{proba} %</span>
        </>
    );
};

const NationalizeDisplay = ({ result, action, onAction }) => {

    if (!result) {
        return (
            <div>
                <h3>Pas de resultat...</h3>
            </div>
        );
    }

    return (
        <div>
            <h3>{result.name} <button onClick={onAction}>{action}</button></h3>
            {result.country.map((country, index) => (
                <NationalizeDisplayCountry {...country} key={index} />
            ))}
        </div>
    );
};

NationalizeDisplay.defaultProps = {
    onAction: () => { }
};

export default NationalizeDisplay;