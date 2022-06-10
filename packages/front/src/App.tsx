import { useEffect, useState } from 'react';
import './App.css';
import Select from './components/utility/select/select';
import Table from './components/utility/table/table';
import {
    fetchPeopleCategories,
    fetchPeopleData,
} from './domains/people/people.domain';

function App() {
    const [variable, setVariable] = useState<string>('');
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPeopleCategories(setCategories, setVariable);
    }, []);

    useEffect(() => {
        if (variable) fetchPeopleData(variable, setData);
    }, [variable]);

    return (
        <div className="flex flex-col p-8 bg-slate-400 space-y-4 rounded-2xl w-[30%]">
            <Select
                value={variable}
                categories={categories}
                onChange={setVariable}
            />

            <Table data={data} />

            <p className="underline">
                {data.length - 100 > 0
                    ? `Il y a ${data.length - 100} lignes non affichées`
                    : 'Toutes les lignes sont affichées'}
            </p>
        </div>
    );
}

export default App;
