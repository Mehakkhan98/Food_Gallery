import { cabinRegular } from "./font";
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    
	 headingColor:"#F9AA33",
     textColor:"gray",
     backgroundColor:"#FFFFFF",
     buttonColor:"#4a6572",
     inputColor:"gray",
     iconColor:"#F9AA33",
	   loadingColor:'#F9AA33',
	   placeholderColor:"#666666",
	   cardColor:'#FAF9F6',
	   modalColor:'#D3D3D3',
	   error:'red',
     userMsgColor:"#4a6572",
     adminMsgColor:"#F9AA33",

  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
   headingColor:"#F9AA33",
   textColor:"#d3d3d3",
	 cardColor:'#454545',
	 modalColor:'black',
   backgroundColor:"black",
   buttonColor:"#F9AA33",
   inputColor:"#d3d3d3",
   iconColor:"#F9AA33",
	 loadingColor:'#FFFFFF',
	 placeholderColor:"#F9AA33",
	 error:'red',
   userMsgColor:"#454545",
   adminMsgColor:"#F9AA33",
  },
};
