alias ssh-myserver='ssh jinlo@157.52.211.93'

alias ssh-confluence='ssh jinlo@192.168.56.102'

function devbox() {
        case "$1" in
        "enter")
                ssh jerel@192.168.56.101
                ;;
        "open")
                if [ -z "$2" ]
                        then
                start "" "http://192.168.56.101"
                        else 
                start "" "http://192.168.56.101:${2}"
                fi
                ;;
        *)
        echo "enter"
        ;;
        esac
}

function confluence() {
        case "$1" in
        "start")
                "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" startvm "confluence" --type headless
                sleep 30s
                ssh-confluence
                ;;
        "shutdown")
                "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" controlvm "confluence" acpipowerbutton
                ;;
        "open")
                if [ -z "$2" ]
                        then
                        start "" "http://192.168.56.102"
                else
                        start "" "http://192.168.56.102:${2}"
                fi
                ;;
        *)
        echo "start"
        ;;
        esac
}