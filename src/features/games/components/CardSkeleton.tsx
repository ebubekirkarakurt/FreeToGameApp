import { StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CardSkeleton = () => {
  return (
        <SkeletonPlaceholder borderRadius={4}>
           <SkeletonPlaceholder.Item width='100%' height='100%'>
           <SkeletonPlaceholder.Item width='100%' height='70%' borderRadius={10}/>
            <SkeletonPlaceholder.Item width={80} height={20} borderRadius={10} marginTop={14} marginStart={10}/>
            <SkeletonPlaceholder.Item flexDirection='row' justifyContent='space-between' alignItems='center' margin={10}>
            <SkeletonPlaceholder.Item flexDirection='row' marginTop={5}>
                <SkeletonPlaceholder.Item width={30} height={30} borderRadius={50} marginRight={5}/> 
                <SkeletonPlaceholder.Item width={100} height={30} borderRadius={10}/> 
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection='row' marginTop={5}>
                <SkeletonPlaceholder.Item width={30} height={30} borderRadius={50} marginRight={5}/> 
                <SkeletonPlaceholder.Item width={100} height={30} borderRadius={10}/> 
            </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
           </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
  );
};

export default CardSkeleton;

const styles = StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
    backgroundColor:'transparnt',
    borderRadius: 10
  },
});
