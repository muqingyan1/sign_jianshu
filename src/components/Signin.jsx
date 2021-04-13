import { Box, Input, Checkbox, Button, HStack, Stack, FormControl, FormHelperText } from "@chakra-ui/react"
import { FaUser, FaLock } from "react-icons/fa"
import { AiFillWarning } from "react-icons/ai"

import Social from './Social'

import { useState } from "react"
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function Signin() {
    const [loginLoading, setLoginLoading] = useState(false)
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('请输入正确邮箱').required('请输入邮箱'),
            password: Yup.string().required('请输入密码')
        }),
        onSubmit: async value => {
            setLoginLoading(true)
            try {
                await axios.post('https://conduit.productionready.io/api/users/login', {
                    user: { ...value }
                })
                setLoginLoading(false)
                alert('登录成功')
            } catch (err) {
                setLoginLoading(false)
                // console.log(err.response.data.errors)
                alert('登录失败')
            }
        }
        // onSubmit:value => {
        //     setLoginLoading(true)
        //     setTimeout(()=>{
        //         console.log(value)
        //         setLoginLoading(false)
        //     },2000)
        // }
    })
    return (
        <form>
            <Stack spacing={3} fontSize="14px">
                <Box overflow="hidden" bg="#efefef" borderRadius="5px" border="1px" borderColor="gray.400">
                    <HStack p={3} borderBottom="1px" borderColor="gray.400">
                        <FaUser color="#7d7d7d" />
                        <Input w="100%" position="relative" placeholder="邮箱" variant="unstyled" borderRadius="none"  {...formik.getFieldProps('email')} />
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
                        <Input placeholder="密码" type="password" variant="unstyled" borderRadius="none"  {...formik.getFieldProps('password')} />
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
                <HStack justify="space-between" color="gray.400">
                    <Checkbox defaultIsChecked>记住我</Checkbox>
                    <Button variant="link" color="gray.400" fontWeight="normal" _hover={{ color: "#000" }} _focus={{ boxShadow: "none" }}>登录遇到问题？</Button>
                </HStack>
                <Button borderRadius="full" fontWeight="normal" colorScheme="blue" w="100%" _focus={{ boxShadow: "none" }} onClick={formik.handleSubmit} disabled={loginLoading}>{loginLoading ? '登录中' : '登录'}</Button>
            </Stack>
            <Social login={true} />
        </form>
    );
}

