import Signin from "./components/Signin"
import Signup from "./components/Signup"

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react"


function App() {
    return (
        <Box bg="#f1f1f1" paddingTop="10px" paddingBottom="30px" minH="100vh">
            <Box w={350} bg="#ffffff" p="30px" paddingBottom="10px" m={"auto"} shadow="md" borderRadius="4px">
                <Tabs variant="unstyled">
                    <TabList justifyContent="center">
                        <Tab fontSize="16px" _focus={{ boxShadow: "none" }} _hover={{ borderBottom: "2px", borderColor: "#ea6f5a" }} p="10px" _selected={{ color: "#ea6f5a", borderBottom: "2px", fontWeight: "bolder" }}>登录</Tab>
                        <Text p="10px" fontSize="20px">·</Text>
                        <Tab fontSize="16px" _focus={{ boxShadow: "none" }} _hover={{ borderBottom: "2px", borderColor: "#ea6f5a" }} p="10px" _selected={{ color: "#ea6f5a", borderBottom: "2px", fontWeight: "bolder" }}>注册</Tab>
                    </TabList>
                    <TabPanels paddingTop="40px">
                        <TabPanel p="0px">
                            <Signin></Signin>
                        </TabPanel>
                        <TabPanel p="0px">
                            <Signup></Signup>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
}

export default App;
