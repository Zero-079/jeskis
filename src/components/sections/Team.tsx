import { teamMembers } from '../../data/gameData';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stone-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="60" height="60" fill="currentColor" className="text-stone-800" />
              <rect x="0" y="0" width="28" height="28" className="text-stone-900" />
              <rect x="32" y="32" width="28" height="28" className="text-stone-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stone-pattern)" />
        </svg>
      </div>

      <Container>
        <SectionTitle
          title="El Equipo de Jeskis"
          subtitle="Cuatro forjadores del Destino"
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-stone-900 border border-stone-700 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(212,168,83,0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner flourishes - visible on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 rounded-tl-lg transition-all duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-500/0 group-hover:border-gold-500/60 rounded-tr-lg transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 rounded-bl-lg transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500/0 group-hover:border-gold-500/60 rounded-br-lg transition-all duration-300" />

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-stone-700 group-hover:border-gold-500/60 transition-all duration-300">
                  {member.avatarUrl ? (
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-burgundy-600 to-burgundy-800 flex items-center justify-center">
                      <span className="text-2xl font-heading text-parchment">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-heading text-center text-gold-400 mb-1 group-hover:text-gold-500 transition-colors">
                {member.name}
              </h3>

              {/* Role - Guild style title */}
              <p className="text-center text-burgundy-500 text-sm uppercase tracking-widest font-medium mb-3">
                {member.role}
              </p>

              {/* Description */}
              {member.description && (
                <p className="text-center text-stone-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              )}

              {/* Decorative line */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent group-hover:via-gold-500/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;