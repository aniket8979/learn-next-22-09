import NewForm from "./newform";


function formatName(value) {
    return value.firstName + ' ' + value.lastName;
}

export default function anoterform() {

    const heading1 = () => {
        let fullName = formatName(
            {
                firstName: 'Aniket',
                lastName: 'Sharma'
            }
        );
        return (<h1> Hello, {fullName}!</h1>);
    }

    const callingheading = heading1();

    return (
        <div>
            {callingheading}
            <div>
                {< NewForm />}
            </div>
        </div>
    )

}