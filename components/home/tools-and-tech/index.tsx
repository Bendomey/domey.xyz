
interface Language {
    name: string;
    proficiency: number;
}

const languages: Language[] = [
    { name: 'JavaScript', proficiency: 4 },
    { name: 'TypeScript', proficiency: 3 },
    { name: 'Python', proficiency: 2 },
    { name: 'Java', proficiency: 1 },
];

export const ToolsAndTech = () => {

    return (
        <div className="space-y-2">
            {languages.map((language) => (
                <div key={language.name} className="flex items-center">
                    <div className="w-1/3 text-gray-400 text-sm ">{language.name}</div>
                    <div className="w-2/3">
                        <div className="relative h-3 bg-zinc-800 rounded">
                            <div
                                className="absolute top-0 left-0 h-full bg-emerald-500 rounded"
                                style={{ width: `${language.proficiency * 25}%` }}
                            ></div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}