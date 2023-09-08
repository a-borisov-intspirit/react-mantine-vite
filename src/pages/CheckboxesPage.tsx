import {
    Card,
    Text,
    Switch,
    Checkbox,
    Divider,
    Grid,
    Title,
    createStyles,
    Space,
    Group,
    Badge
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    section: {
        height: 50,
        background: '#40c057',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        alignItems: 'center',
        color: '#fff',
    },
    group: {
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
    thumb: {
        'input:checked + * > &': {
            backgroundColor: '#40c057',
        },
    },
    track: {
        'input:checked + *':{
            backgroundColor: 'white',
            borderColor: 'white',
        }
    },
}));

export const CheckboxesPage = () => {
const { classes } = useStyles();
  return (
      <Card withBorder radius="md" >    
            <Card.Section className={classes.section}>
                <Title order={3}>Personalization Settings:</Title>
              <Switch
                  color='gray'
                  labelPosition='left'
                  label='Use Account Research'
                  classNames={classes}
                  className={classes.track}
                  sx={{ ["& .mantine-Switch-label"]: { color: "#fff", fontSize: 15, fontWeight: 600 } }}
                />
            </Card.Section>  
            <Group className={classes.group}>
                <Text ta="left" fw={500} fz="lg">Profile:</Text>
                <Grid grow>
                    <Grid.Col span={6}><Checkbox data-cy="checkbox1" label='Linkedin Bio' /></Grid.Col>
                    <Grid.Col span={6}><Checkbox  label='Years of experience' /></Grid.Col>
                    <Grid.Col span={6}><Checkbox label='Current Experience' /></Grid.Col>
                    <Grid.Col span={6}>
                        <Group position="left">
                            <Checkbox data-cy="checkbox2" label='Current job description' disabled />
                                <Badge color="red" variant="light">
                                    Disabled
                                </Badge>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={6}><Checkbox label='List of past jobs' /></Grid.Col>
                    <Grid.Col span={6}>
                        <Group position="left">
                            <Checkbox label='Current Job specialities' disabled />
                                <Badge color="red" variant="light">
                                    Disabled
                                </Badge>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Group>
            <Space h="md" />
            <Divider />
            <Space h="md" />
            <Group className={classes.group}>
                <Text ta="left" fw={500} fz="lg">Account:</Text>
                <Grid grow>
                    <Grid.Col span={6}><Checkbox label='Linkedin Bio'/></Grid.Col>
                    <Grid.Col span={6}><Checkbox label='Years of experience' /></Grid.Col>
                    <Grid.Col span={6}><Checkbox label='Current Experience' /></Grid.Col>
                    <Grid.Col span={6}>
                        <Group position="left">
                            <Checkbox label='Current job description' disabled />
                                <Badge color="red" variant="light">
                                    Disabled
                                </Badge>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={6}><Checkbox label='List of past jobs' /></Grid.Col>
                    <Grid.Col span={6}>
                        <Group position="left">
                            <Checkbox label='Current Job specialities' disabled />
                                <Badge color="red" variant="light">
                                    Disabled
                                </Badge>
                        </Group>
                    </Grid.Col>
                 </Grid>
            </Group>
    </Card>
  );}

