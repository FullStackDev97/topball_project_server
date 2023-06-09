import Team from "../models/Team.Model.js";
import Team_Player from "../models/Team.Player.Model.js"

export const findTeamById = async (team_id)=>{
    try {

        the_team = await Team.findByPk(team_id);
        console.log('########## equipe trouvé ########');
        console.log(the_team);
        return the_team;
    } catch (error) {
        console.log("echec ! impossible de d'afficher l'equipe");
        console.log('#########################################');
        console.log(error);
    }
};

export const findTeamsByUserId = async (u_id)=>{
    console.log(u_id);
    try {
        const the_teams = await Team.findAll({
            where: {
              user_id: u_id
            },attributes:['team_id','name','country']    
            
        });
        console.log('########## equipes trouvées ########');
        console.log(the_teams);
        return the_teams;
    } catch (error) {
        console.log("echec ! impossible de d'afficher les equipes");
        console.log('#########################################');
        console.log(error);
    }
};


export const findAllTeams = async ()=>{
    try {

        the_team = await Team.findAll();
        console.log('########## equipes trouvées ########');
        console.log(the_team);
        return the_team;
    } catch (error) {
        console.log("echec ! impossible de d'afficher les equipes");
        console.log('#########################################');
        console.log(error);
    }
};

export const findAllCharactersByTeam = async (team_id)=>{
    

    try {
        const teamCharacterIds = await Team_Character.findAll({where:{team_id:team_id}});
        teamCharacterIds.forEach(i=>console.log(i));
        return teamCharacterIds;
    } catch (error) {
        console.log(error);
    }
}

export const createTeam = async (newTeam)=>{
    try {
       const createdTeam =  await Team.create(newTeam);
       console.log(createdTeam);
    } catch (error) {
        console.log(error)
    }
};

export const updateTeam = async (teamUpdates,team_id)=>{
    try {
        const updatedTeam = await Team.update(teamUpdates,{where:{team_id:team_id}});
        console.log(updatedTeam);
    } catch (error) {
        console.log(error);
    }
};

export const deleteTeam = async (team_id)=>{
    try {
        const deletedTeam = Team.destroy({where:{team_id:team_id}});
    } catch (error) {
        console.log(error);
    }
};

export const deleteTeamByUserId = async (user_id)=>{
    try {
        const deletedTeams = Team.destroy({where:{user_id:user_id}});
    } catch (error) {
        console.log(error);
    }
};

