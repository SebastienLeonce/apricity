const API_URL = process.env.REACT_APP_API_URL;

export const fetchPeopleCategories = async (
    setCategories: (arg0: any) => void,
    setVariable: (arg0: any) => void
) => {
    const streamCategories = await fetch(`${API_URL}/people/category`);
    const dataCategories = await streamCategories.json();
    setCategories(dataCategories);
    setVariable(dataCategories[0]);
};

export const fetchPeopleData = async (
    variable: string,
    setData: (arg0: any) => void
) => {
    const streamData = await fetch(`${API_URL}/people?category=${variable}`);
    const data = await streamData.json();
    setData(data);
};
