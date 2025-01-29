import { Card, SkeletonText } from '@chakra-ui/react'

const SkeletonCard = () => {
  return (
    <Card boxShadow={"lg"}>
      <SkeletonText p="4" noOfLines={1} spacing={"4"} skeletonHeight={"620"}>
      </SkeletonText>
      <SkeletonText mt="4" noOfLines={2} spacing={"4"} skeletonHeight={"2"}></SkeletonText>
    </Card>
  )
}

export default SkeletonCard