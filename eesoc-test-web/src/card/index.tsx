import { Card, Image, Text, Grid } from "@mantine/core";
import "./CardComponent.css";

type CardDetails = {
  mainTitle: string;
  smallTitle: string;
  description: string;
  imageDetails: {
    url: string;
    alt: string;
  };
};

const CardComponent = (props: CardDetails) => {
  const knowMoreBtn = "Know More >";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Grid columns={12}>
        <Grid.Col span={{ base: 8, md: 8, lg: 8 }}>
          <Text size="sm" c="dimmed">
            {props.smallTitle}
          </Text>
          <Text fw={500} tt="uppercase">
            {props.mainTitle}
          </Text>

          <Text size="sm" c="dimmed" mt="md">
            {props.description}
          </Text>

          <Text c="pink" fw={700} mt="md">
            {knowMoreBtn}
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 4, md: 4, lg: 4 }}>
          <div className="card-container">
            <Image
              className="scaling-image"
              src={props.imageDetails.url}
              height={160}
              alt={props.imageDetails.alt}
            />
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default CardComponent;
