import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal(): void;//sempre que uma função for passada pro propriedade, prefixo on
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}