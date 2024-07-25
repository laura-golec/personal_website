import { Text } from "@components";

export default function Home() {

  return (
    <div className='innerContainer'>
      <Text preset="heading">
        Heading
      </Text>
      <Text preset="subheading">
        Subheading
      </Text>
      <Text preset="h3">
        Third heading
      </Text>
      <Text preset="h4">
        Fourth heading
      </Text>
      <Text preset="body">
        Body text
      </Text>
      <Text preset="caption">
        Caption text
      </Text>
    </div>
  );
}
