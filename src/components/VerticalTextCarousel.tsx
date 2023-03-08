"use client";
import roles, { roleProps } from "@/constants/roles";


export interface carouselProps {
  roles: roleProps[];
}

const VerticalTextCarousel: React.FC<carouselProps> = ({roles}) => {
    return (
        <div className="vertical-text-carousel-wrapper">
            <div className="roles">
                {roles.map((role) => (
                        <div key={role.id}>
                            {role.title}
                        </div>
                ))}
            </div>
        </div>
    )

}

export default VerticalTextCarousel;