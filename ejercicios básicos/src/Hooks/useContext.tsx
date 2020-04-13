import React, { useContext } from 'react';

enum Themes {
    Green = 'green',
    Red = 'red'
}

const ThemeContext = React.createContext<Themes>(Themes.Red);

export const ThemeProvider: React.FC = () => (
    <ThemeContext.Provider value={Themes.Red}>
        <ButtonRow></ButtonRow>
    </ThemeContext.Provider>
)

const ButtonRow: React.FC = () => (
    <section>
        <Button></Button>
        <Button></Button>
        <Button></Button>
    </section>
)

const Button: React.FC = () => {
    const theme = useContext(ThemeContext);

    const style = {color: theme} ;
console.log(theme)
    return <button style={style}>NEXT</button>
}