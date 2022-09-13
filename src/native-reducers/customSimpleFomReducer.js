export const initialTableData = [
    {
        name: "Tomas Krcmar",
        email: "tomas.krcmar@email.cz"
    },
    {
        name: "Žerald z Vivije",
        email: "zerald.vivije@email.cz"
    }
]

export const customSimpleFormReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return initialTableData.push(action.payload);
        case "REMOVE":
            return initialTableData.filter(p => p.name !== action.payload.name);
        default:
            return initialTableData
    }
}
