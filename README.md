# VSM Official Site

## How to run

For first time

- Move to the directory containing package.json
- npm install
- npm run dev

Starting the server

- npm run dev

## Components

- Folder name and Component name should be PascalCase
  > `Component` or `ComponentName`
- Components must be a react function
- Create stateless components if possible
- Add className in string template format

  > `` <div className=`global-class`></div> `` or `` <div className=`global-class ${styles['module-class']}`></div> ``

  > where `styles` is the imported css module

## Styles

- Name all classes with snake-case
  > `class` or `class-name`
- Use `&` for pseudo classes and elements like `:hover`, `:active`, `:first-child`.
- Add [variables](https://sass-lang.com/documentation/variables), [key-frames](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes#:~:text=The%20%40keyframes%20CSS%20at%2Drule,the%20animation%20sequence%20than%20transitions.), common repetitive css code in the form of [mixin](https://css-tricks.com/custom-user-mixins/) in `/styles/base.scss`.
- Add classes which are used frequently in `/styles/global.scss`.
- Follow SCSS format for styling

  - Styling for this component
    ```
    return (
        <div className=`main`>
            <div className=`first-class`></div>
            <div className=`second-class`>
                <div className=`second-sub-class`></div>
            </div>
        </div>
    )
    ```
  - Wrong Format

    ```
    .main{
        /* some styles */
    }
    .main .first-class{
        /* some styles */
    }
    .second-class{
        /* some styles */
    }

    .second-sub-class{
        /* some styles */
    }
    .second-class:hover{
        /* some styles */
    }
    @media (min-width: 500px){
        .main{
            /* some styles */
        }
    }
    ```

  - Correct Format

    ```
    .main{
        /* some styles */

        @media (min-width: 500px){
            /* some styles */
        }

        .first-class{
            /* some styles */
        }

        .second-class{
            /* some styles */

            &:hover{
            /* some styles */
            }

            .second-sub-class{
                /* some styles */
            }
        }
    }

    ```

- Classes which are global but needs to be customized for particular component
  - Add new class with the same name and `-mod` at the end.
  - div component with `global-class` needs customizations
    ```
        <div className=`global-class`></div>
    ```
  - Add new class like this
    ```
        <div className=`global-class ${styles['global-class-mod']}`></div>
    ```

## API calls

- Add new api call logic in `/shared/api.js` with proper name and comment if required
- Import the function in the required functional component.
- Invoke it in component's `getStaticProps` or `useEffect` as you see fit.
