'use client'

import React, { useState } from 'react'
import { Control, FieldPath, useForm } from "react-hook-form"
import { z } from "zod"
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInputBox {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInputBox = ({ control, name, label, placeholder }: CustomInputBox) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='input-class'
                                type={name === 'password' ? 'password' : 'text'}
                                {...field}>
                            </Input>
                        </FormControl>
                        <FormMessage
                            className='form-message mt-2'>
                        </FormMessage>
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInputBox