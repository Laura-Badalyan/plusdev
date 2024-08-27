import { Header } from './header';
import { SubHeader } from './sub-header';
import { ReactComponent as File } from '../../icons/file.svg';

export const DefaultHeader = () => {
    return (
        <>
            <Header />
            <SubHeader icon={<File />} text="Հայտեր" />
        </>
    );
};

