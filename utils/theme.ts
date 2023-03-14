import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools'
import {mergeWith} from '@chakra-ui/utils'


export function makeTheme(overrides: ThemeOverride = {}){
    const theme = extendTheme({
        ...extendedTheme, 
    })
    return mergeWith(theme, overrides)

}

export const extendedTheme = extendTheme({
    fonts :  {
        body: `M PLUS Rounded 1c, Roboto, -apple-system."Segoe UI, Arial, san-serif"`
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#364A58', '')(props),

            },
        }),
    },

})

export const theme = makeTheme()


