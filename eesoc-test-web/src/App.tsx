import CardComponent from "./card";
import { Grid, Card, Title } from "@mantine/core";
import "./App.css";

// All data is in a seperate file
import { CardData } from "./data";

function App() {

  return (
    <div>
      <Grid>
        <Card>
          <Title order={2}>Practice - Card Component Section</Title>

          <Card>
            <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
              {CardData &&
                CardData.map((innerCard, index) => (
                  <Grid.Col span={{ base: 12, md: 6, lg: 6 }} key={index}>
                    <CardComponent
                      mainTitle={innerCard.mainTitle}
                      smallTitle={innerCard.smallTitle}
                      description={innerCard.description}
                      imageDetails={innerCard.image}
                    />
                  </Grid.Col>
                ))}
            </Grid>
          </Card>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
