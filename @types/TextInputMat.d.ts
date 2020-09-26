import * as React from "react";
import 'react-materialize'

declare module "react-materialize"{
    interface TextInputProps{
        onKeyDown: (e:KeyboardEvent) => void;
        autoComplete: string;
    }
}