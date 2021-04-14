import { Box,Stack } from "@chakra-ui/react";
import {RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSections";


export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start" >
            <NavSection title="GERAL" >
                <NavLink icon={RiDashboardLine} href="/dashboard">DashBboard</NavLink>
                <NavLink icon={RiContactsLine} href="/users">Usuário</NavLink>
            </NavSection>
            <NavSection title="Automação">
                <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automatization">Automação</NavLink>
            </NavSection>
        </Stack>
)
}