interface RenderListProps {
  data: any[];
  resourceName: string;
  dataToRender: any;
}

const RenderList = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderListProps) => {
  return <div>RenderList</div>;
};

export default RenderList;
