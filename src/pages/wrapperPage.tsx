import React from "react";

interface ComponentType {
  id: any;
  child: React.ReactNode;
  // isBackHistory?: boolean;
  // customBack?: () => void;
}

interface WrapperProps {
  components?: ComponentType[];
  index?: any;
}
function WrapperPage({ components = [], index }: WrapperProps) {
  //  const { components, index } = props;
  const getcomponent = components.filter((item) => item.id === index);
  console.log(
    "inside wrapper:",
    getcomponent,
    "components=",
    components,
    "index=",
    index
  );
  return (
    <>
      {getcomponent.map((component) => (
        <>
          {/* {backButton(component.isBackHistory, component.customBack)} */}
          <div key={component.id}>{component.child}</div>
        </>
      ))}
    </>
  );
}

export default WrapperPage;
