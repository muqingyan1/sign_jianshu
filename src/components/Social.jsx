import { Box, Flex, Text   } from "@chakra-ui/react"
import { FaQq, FaWeixin, FaWeibo } from "react-icons/fa";


export default function Social(props) {
    return (
        <Box position="relative" mt="30px" textAlign="center">
            <Text
                mb="5px"
                fontSize="12px"
                color="#B5B5B5"
                _before={{
                    content: "''",
                    borderTop: "1px solid #b5b5b5",
                    display: "block",
                    position: "absolute",
                    width: "60px",
                    top: "9px",
                    left: "30px",
                }}
                _after={{
                    content: "''",
                    borderTop: "1px solid #b5b5b5",
                    display: "block",
                    position: "absolute",
                    width: "60px",
                    top: "9px",
                    right: "30px",
                }}>
                {props.login ? '社交账号登录' : '社交帐号直接注册'}
            </Text>

            <Flex fontSize="30px" justify="center">
                <Box p="10px" display={props.login ? "block" : "none"}>
                    <FaWeibo color="#e05244" />
                </Box>
                <Box p="10px">
                    <FaWeixin color="#00bb29" />
                </Box>
                <Box p="10px">
                    <FaQq color="#498ad5" />
                </Box>
            </Flex>
        </Box>
    );
}

