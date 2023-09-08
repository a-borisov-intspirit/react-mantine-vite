import { Button, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
    button: {
        background: '#40c057',
    },
}));

interface IButtonPage {
    handleClick:()=>void
}

export const ButtonPage = ({handleClick}:IButtonPage) => {
    
    const { classes } = useStyles();
    return <Button color="teal" onClick={handleClick} className={classes.button}>Click to Personalize</Button>
}