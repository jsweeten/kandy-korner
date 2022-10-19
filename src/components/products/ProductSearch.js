import "./Products.css"

export const ProductSearch = ({ setterFunction }) => {
    return ( <>
        <h2>cHeCk oUt oUr kOlLeCtIoN oF kAnDy!</h2>
        <div className="search-container">
            <form>
                <fieldset>
                    <input
                    type="text"
                    placeholder="Search for a candy..."
                    onChange={
                        (event) => {
                            setterFunction(event.target.value)
                        }}/>
                </fieldset>
            </form>
        </div>
        </>)
}