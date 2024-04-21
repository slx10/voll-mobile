import { Button, ITextProps } from 'native-base'
import { Children, ReactNode } from 'react'

interface BotaoProps extends ITextProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({ children, autoSize=false, color, ...rest }:BotaoProps){
    return (
    <Button
        w={autoSize ? 'auto' : '100%'}
        bg={color || 'blue.800'}
        mt={10}
        borderRadius="lg"
        _text={{color:'white'}}
        {...rest}
    >
        {children}
    </Button>
    )
}