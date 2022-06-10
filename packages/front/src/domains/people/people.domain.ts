export const fetchPeopleCategories = async (
    setCategories: (arg0: any) => void,
    setVariable: (arg0: any) => void
) => {
    const streamCategories = await fetch(
        `http://localhost:3001/people/category`
    );
    const dataCategories = await streamCategories.json();
    setCategories(dataCategories);
    setVariable(dataCategories[0]);
};

export const fetchPeopleData = async (
    variable: string,
    setData: (arg0: any) => void
) => {
    const streamData = await fetch(
        `http://localhost:3001/people?category=${variable}`
    );
    const data = await streamData.json();
    setData(data);
};
