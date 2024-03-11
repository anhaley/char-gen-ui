import { useState } from 'react';
import './form.css';

const CLASSES = [
    // 'Barbarian',
    // 'Bard',
    // 'Cleric',
    // 'Druid',
    'Fighter',
    // 'Monk',
    // 'Paladin',
    // 'Ranger',
    // 'Rogue',
    // 'Sorcerer',
    // 'Warlock',
    // 'Wizard'
];

const FIGHTING_STYLES = {
    'archery': 'Archery',
    'defense': 'Defense',
    'dueling': 'Dueling',
    'greatWeaponFighting': 'Great Weapon Fighting',
    'protection': 'Protection',
    'twoWeaponFighting': 'Two-Weapon Fighting'
};

const Form = () => {
    const [name, setName] = useState('');
    const [charClass, setCharClass] = useState('Fighter');
    const [level, setCharLevel] = useState(1);
    const [fightingStyle, setFightingStyle] = useState('archery');
    const [error, setError] = useState(null);
    return (
      <div>
        <form>
            <label>
                Name:{' '}
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Class:{' '}
                <select name="class" value={charClass} onChange={(e) => setCharClass(e.target.value)}>
                    {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </label>
            <br />
            <label>
                Level:{' '}
                <select name='level' value={level} onChange={(e) => setCharLevel(e.target.value)}>
                    {new Array(20).fill().map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>
            </label>
            <br />
            {charClass === 'Fighter' && <div>
                <label>
                    Fighting Style:{' '}
                    <select name='fightingStyle' value={fightingStyle} onChange={(e) => setFightingStyle(e.target.value)}>
                        {Object.entries(FIGHTING_STYLES).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
                    </select>
                </label>
                <br/>
            </div>}
            {error && <div className="error">{error}</div>}
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default Form;
