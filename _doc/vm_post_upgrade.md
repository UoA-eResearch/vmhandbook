---
title:  "Post Ubuntu VirtualMachine OS Upgrade"
categories: linux admin user howto
---

1. Any third-party applications you have previously installed may need to be reinstalled.  Libraries these applications depend on have been upgraded and your applicaiton may need to be upgraded too.

2.  Python virtual environments will generally need to be re-installed.  The steps involved are - assuming you are already in the root directory of your project, and the virtual environment is installed in a dedicated subdirectory, `venv`:

    1.  record the packages in the environment 

        ```console
        $ source venv/bin/activate
        (venv) $ pip freeze > frozen_requirements.txt
        (venv) $ deactivate
        ```

    2.  remove the directory tree containing the environment
    If you had installed your virtual environment in a dedicated directory venv,

        ```console
        $ rm -rf venv/
        ```

    Or, if your virtual environment is not in a dedicated directory, so
    you can see directories `bin`, `lib`, `share`, `include` in your root project directory

        ```console
        $ rm -rf bin lib include share
        ```

    3.  create a new virtual environment with the version of python you want to use
    

        ```console 
        $ python3 -m venv venv
        (venv) $ source venv/bin/activate
        ```


    4.  re-install the packages recorded in your `frozen_requirements.txt` file:


        ```console 
        (venv) $ pip install -r frozen_requirements.txt
        ```


## References

[python_anywhere - rebuilding virtual environments](https://help.pythonanywhere.com/pages/RebuildingVirtualenvs)

Changes to that documentation:
*   with python3 on your system, and no system `python` command:
    use the command

    ```bash
    python3 -m venv <venv_name>
    source <venv_name>/bin/activate
    ```
