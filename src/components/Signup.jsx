import { Box, Input, Button, HStack, Stack, Text, Link, FormControl, FormHelperText  } from "@chakra-ui/react"
import { FaUser, FaLock, FaMobileAlt } from "react-icons/fa"
import { AiFillWarning } from "react-icons/ai"

import Social from './Social'

import { useState } from "react"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function Signup() {
    const [registerLoading, setRegisterLoading] = useState(false)
    const formik = useFormik({
        initialValues: { username: "", email: "", password: "" },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('请输入昵称')
                .matches(/^[0-9a-zA-Z_]{3,}$/, '三位以上数字字母下划线'),
            email: Yup.string().email('请输入正确邮箱').required('请输入邮箱'),
            password: Yup.string().min(8, '最少8位').required('请设置密码')
        }),
        onSubmit: async values => {
            setRegisterLoading(true)
            try{
                await axios.post(' https://conduit.productionready.io/api/users', {
                    user: {
                        username: values.username,
                        email: values.email,
                        password: values.password
                    }
                })
                setRegisterLoading(false)
                alert('注册成功')
            }catch(err){
                setRegisterLoading(false)
                // console.log(err.response.data.errors)
                const { email, username, password } = err.response.data.errors
                alert(`
                    用户名：${ username ? username.join(',') : '符合要求'},
                    邮箱：${ email ? email.join(',') : '符合要求'},
                    密码：${ password ? password.join(',') : '符合要求'}
                `)
            }
        }
    })
    return (
        <form>
            <Stack spacing={3}>
                <Box overflow="hidden" bg="#efefef" borderRadius="5px" border="1px" borderColor="gray.400">
                    <HStack p={3} borderBottom="1px" borderColor="gray.400">
                        <FaUser color="#7d7d7d" />
                        <Input w="100%" placeholder="你的昵称" variant="unstyled" borderRadius="none" {...formik.getFieldProps('username')} />
                        <FormControl
                            display={formik.touched.username && formik.errors.username ? 'block' : 'none'}
                            borderColor="tomato"
                            w="180px"
                            textAlign="center"
                            borderRadius="4px"
                            border="1px solid #c8c8c8"
                            py="3px"
                            px="10px"
                            position="absolute"
                            left="315px"
                            bgColor="#fff"
                        >
                            <Box
                                position="absolute"
                                borderTop="1px solid #c8c8c8"
                                borderLeft="1px solid #c8c8c8"
                                bgColor="#fff"
                                w="10px"
                                h="10px"
                                transform="rotate(-45deg)"
                                top="12px"
                                left="-6px"
                            ></Box>
                            <Stack direction="horizontal" align="center">
                                <AiFillWarning color={"#ea6f5a"} fontSize="26px" />
                                <FormHelperText
                                    w="100%"
                                    mt="0px"
                                    color="#333"
                                    fontSize="14px"
                                    py="5px"
                                >
                                    {formik.errors.username ? formik.errors.username : ''}
                                </FormHelperText>
                            </Stack>
                        </FormControl>
                    </HStack>
                    <HStack p={3} borderBottom="1px" borderColor="gray.400">
                        <FaMobileAlt color="#7d7d7d" />
                        <Input w="100%" placeholder="邮箱" variant="unstyled" borderRadius="none" {...formik.getFieldProps('email')} />
                        <FormControl
                            display={formik.touched.email && formik.errors.email ? 'block' : 'none'}
                            borderColor="tomato"
                            w="180px"
                            textAlign="center"
                            borderRadius="4px"
                            border="1px solid #c8c8c8"
                            py="3px"
                            px="10px"
                            position="absolute"
                            left="315px"
                            bgColor="#fff"
                        >
                            <Box
                                position="absolute"
                                borderTop="1px solid #c8c8c8"
                                borderLeft="1px solid #c8c8c8"
                                bgColor="#fff"
                                w="10px"
                                h="10px"
                                transform="rotate(-45deg)"
                                top="12px"
                                left="-6px"
                            ></Box>
                            <Stack direction="horizontal" align="center">
                                <AiFillWarning color={"#ea6f5a"} fontSize="26px" />
                                <FormHelperText
                                    w="100%"
                                    mt="0px"
                                    color="#333"
                                    fontSize="14px"
                                    py="5px"
                                >
                                    {formik.errors.email ? formik.errors.email : ''}
                                </FormHelperText>
                            </Stack>
                        </FormControl>
                    </HStack>
                    <HStack p={3}>
                        <FaLock color="#7d7d7d" />
                        <Input placeholder="设置密码" type="password" variant="unstyled" borderRadius="none" {...formik.getFieldProps('password')} />
                        <FormControl
                            display={formik.touched.password && formik.errors.password ? 'block' : 'none'}
                            borderColor="tomato"
                            w="180px"
                            textAlign="center"
                            borderRadius="4px"
                            border="1px solid #c8c8c8"
                            py="3px"
                            px="10px"
                            position="absolute"
                            left="315px"
                            bgColor="#fff"
                        >
                            <Box
                                position="absolute"
                                borderTop="1px solid #c8c8c8"
                                borderLeft="1px solid #c8c8c8"
                                bgColor="#fff"
                                w="10px"
                                h="10px"
                                transform="rotate(-45deg)"
                                top="12px"
                                left="-6px"
                            ></Box>
                            <Stack direction="horizontal" align="center">
                                <AiFillWarning color={"#ea6f5a"} fontSize="26px" />
                                <FormHelperText
                                    w="100%"
                                    mt="0px"
                                    color="#333"
                                    fontSize="14px"
                                    py="5px"
                                >
                                    {formik.errors.password ? formik.errors.password : ''}
                                </FormHelperText>
                            </Stack>
                        </FormControl>
                    </HStack>
                </Box>
                <Button borderRadius="full" fontWeight="normal" colorScheme="green" w="100%" _focus={{ boxShadow: "none"}}  onClick={formik.handleSubmit} disabled={registerLoading}>{registerLoading ? '注册中' : '注册'}</Button>
                <Text fontSize="12px" color="gray.400" textAlign="center">
                    点击 “注册” 即表示您同意并愿意遵守简书 {" "}
                    <br/>
                    <Link color="teal.500" href="http://www.jianshu.com/p/c44d171298ce" m={1} _hover={{ textDecoration: "none" }}>
                        用户协议
                    </Link>
                        和
                    <Link color="teal.500" href="http://www.jianshu.com/p/2ov8x3" m={1} _hover={{ textDecoration: "none" }}>
                        隐私政策
                    </Link>。
                </Text>
            </Stack>
            <Social />
        </form>
    );
}

